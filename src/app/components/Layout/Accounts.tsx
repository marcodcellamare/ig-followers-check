import { Helmet } from 'react-helmet-async';
import { Floppy, Folder } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import { saveFile, readFile } from '@utils/index';
import Config from '@config';
import File from '@components/Misc/File';
import Account from './Account';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Accounts = () => {
	const { i18n } = useTranslation();
	const { accountsFiltered, getRatingToFile, setRatingFromFile } = useInfo();
	const [clickTrigger, setClickTrigger] = useState('');

	const downloadRatings = () => {
		saveFile({
			content: getRatingToFile(),
			filename: 'ifc-' + new Date().toISOString() + '-ratings',
			extension: Config.data.extensions.ratings,
		});
	};
	const uploadRatings = (file: File) => {
		readFile(file, (content) => {
			setRatingFromFile(content);
		});
	};
	const uploadRatingsTrigger = () => {
		setClickTrigger(uuidv4());
	};

	return (
		<section className='my-4'>
			<Helmet>
				<title>{i18n.t('ACCOUNTS')}</title>
			</Helmet>
			{accountsFiltered.length > 0 ? (
				<div className='table-responsive'>
					<table className='table table-sm table-hover'>
						<thead>
							<tr>
								<th
									scope='col'
									className='text-end pe-2'
									style={{ width: '1px' }}>
									#
								</th>
								<th
									scope='col'
									style={{ width: '1px' }}
									className='text-nowrap'>
									<File
										hidden={true}
										accept={`.${Config.data.extensions.ratings}`}
										clickTrigger={clickTrigger}
										onFileSelected={uploadRatings}
									/>
									<span className='btn-group align-bottom me-1'>
										<button
											className='btn btn-sm btn-outline-success p-1 lh-1'
											onClick={uploadRatingsTrigger}>
											<Folder />
										</button>
										<button
											className='btn btn-sm btn-outline-danger p-1 lh-1'
											onClick={downloadRatings}>
											<Floppy />
										</button>
									</span>
									{i18n.t('RATING')}
								</th>
								<th scope='col'>{i18n.t('ID')}</th>
								<th
									scope='col'
									style={{ width: '1px' }}
								/>
								<th
									scope='col'
									style={{ width: '1px' }}>
									{i18n.t('FOLLOWERS')}
								</th>
								<th
									scope='col'
									style={{ width: '1px' }}>
									{i18n.t('FOLLOWING')}
								</th>
							</tr>
						</thead>
						<tbody>
							{accountsFiltered.map((account, k) => {
								return (
									<Account
										key={k}
										k={k}
										account={account}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			) : (
				<p className='fw-bold text-danger'>{i18n.t('NO_RESULTS')}</p>
			)}
		</section>
	);
};
export default Accounts;
