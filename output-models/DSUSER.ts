import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSUSERAttributes {
    LID: number;
    STRLOGIN: string;
    STRDOMAIN?: string;
    STRLOGINLWR: string;
    STRDOMAINLWR?: string;
    STRPWDHASH?: string;
    STRSALT?: string;
    DTPWDCHANGED?: Date;
    BPWDEXPIRES: boolean;
    BMUSTCHANGEPASS: boolean;
    BMUSTNOTCHANGEPASS: boolean;
    LLOGINATTEMPTS: number;
    BISLOCKABLE: boolean;
    LLOCKED: number;
    BSHOWUSER: boolean;
    STRFULLNAME?: string;
    STRFIRSTNAME?: string;
    STRMIDDLENAME?: string;
    STRLASTNAME?: string;
    STRTITLE?: string;
    STREMPLOYEENO?: string;
    DTENTER?: Date;
    LGENDER?: number;
    DTBIRTH?: Date;
    STRSTREET?: string;
    STRPOSTALCODE?: string;
    STRPOBOX?: string;
    STRCITY?: string;
    STRSTATE?: string;
    STRISOCOUNTRYCODE?: string;
    STRCOUNTRY?: string;
    STRPHONEBIZ?: string;
    STRPHONEMOBILEBIZ?: string;
    STRPHONEHOME?: string;
    STRPHONEMOBILEHOME?: string;
    STRPHONEFAX?: string;
    STRPHONEPAGER?: string;
    STRMAILBIZ?: string;
    STRMAILHOME?: string;
    STRTIMEZONE?: string;
    LEXTPRIMGRPID?: number;
    STREXTLOGIN1?: string;
    STREXTPWD1?: string;
    STREXTLOGIN2?: string;
    STREXTPWD2?: string;
    STREXTLOGIN3?: string;
    STREXTPWD3?: string;
    STRDEFAULTLAYOUT?: string;
    STRDEFAULTLAYOUTMOBILE?: string;
    LBOSS?: number;
    LPROXYPERSON?: number;
    STRIMG_FILENAME?: string;
    STRIMG_URL?: string;
    STRIMG_CONTENTTYPE?: string;
    STRDEFAULTLANG?: string;
    STRDEFAULTLOCALE?: string;
    DTIMG_LASTMODIFIED?: Date;
    STRIMG_META?: string;
    STRPOSCODE?: string;
    STRCOMPANY?: string;
    STROFFICENR?: string;
    STRINFO?: string;
    KANBANMANDANT?: string;
}

@Table({
	tableName: "DSUSER",
	timestamps: false 
})
export class DSUSER extends Model<DSUSERAttributes, DSUSERAttributes> implements DSUSERAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	type: DataType.STRING(254) 
    })
    	STRLOGIN!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(48) 
    })
    	STRDOMAIN?: string;

    @Column({
    	type: DataType.STRING(254) 
    })
    	STRLOGINLWR!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(48) 
    })
    	STRDOMAINLWR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRPWDHASH?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64) 
    })
    	STRSALT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTPWDCHANGED?: Date;

    @Column({
    	type: DataType.STRING 
    })
    	BPWDEXPIRES!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BMUSTCHANGEPASS!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BMUSTNOTCHANGEPASS!: boolean;

    @Column({
    	type: DataType.INTEGER 
    })
    	LLOGINATTEMPTS!: number;

    @Column({
    	type: DataType.STRING 
    })
    	BISLOCKABLE!: boolean;

    @Column({
    	type: DataType.INTEGER 
    })
    	LLOCKED!: number;

    @Column({
    	type: DataType.STRING 
    })
    	BSHOWUSER!: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(172) 
    })
    	STRFULLNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64) 
    })
    	STRFIRSTNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64) 
    })
    	STRMIDDLENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64) 
    })
    	STRLASTNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64) 
    })
    	STRTITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(16) 
    })
    	STREMPLOYEENO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTENTER?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LGENDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTBIRTH?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(96) 
    })
    	STRSTREET?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	STRPOSTALCODE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	STRPOBOX?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(96) 
    })
    	STRCITY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	STRSTATE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2) 
    })
    	STRISOCOUNTRYCODE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	STRCOUNTRY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRPHONEBIZ?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRPHONEMOBILEBIZ?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRPHONEHOME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRPHONEMOBILEHOME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRPHONEFAX?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRPHONEPAGER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(254) 
    })
    	STRMAILBIZ?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(254) 
    })
    	STRMAILHOME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	STRTIMEZONE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LEXTPRIMGRPID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(254) 
    })
    	STREXTLOGIN1?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STREXTPWD1?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(254) 
    })
    	STREXTLOGIN2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STREXTPWD2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(254) 
    })
    	STREXTLOGIN3?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STREXTPWD3?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	STRDEFAULTLAYOUT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	STRDEFAULTLAYOUTMOBILE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LBOSS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LPROXYPERSON?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRIMG_FILENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRIMG_URL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	STRIMG_CONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(16) 
    })
    	STRDEFAULTLANG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	STRDEFAULTLOCALE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTIMG_LASTMODIFIED?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRIMG_META?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRPOSCODE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCOMPANY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STROFFICENR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRINFO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	KANBANMANDANT?: string;

}