import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCFWCONNAttributes {
    STRGUID: string;
    STRNAME: string;
    STRSERVERPATH: string;
    STRDEFCLIENTPATH: string;
    BSEARCHENABLED: boolean;
    BALWAYSGLOBAL: boolean;
    STRSUMMARYSTYLE?: string;
    TXTFILEFILTER?: string;
    BCHECKPERMISSIONS: boolean;
}

@Table({
	tableName: "LCFWCONN",
	timestamps: false 
})
export class LCFWCONN extends Model<LCFWCONNAttributes, LCFWCONNAttributes> implements LCFWCONNAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(80) 
    })
    	STRNAME!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRSERVERPATH!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRDEFCLIENTPATH!: string;

    @Column({
    	type: DataType.STRING 
    })
    	BSEARCHENABLED!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BALWAYSGLOBAL!: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	STRSUMMARYSTYLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTFILEFILTER?: string;

    @Column({
    	type: DataType.STRING 
    })
    	BCHECKPERMISSIONS!: boolean;

}