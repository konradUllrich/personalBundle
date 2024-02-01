import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPREFAttributes {
    STRGUID: string;
    STRNAME?: string;
    STRAPPGUID: string;
    STRAPPDGGUID: string;
    STRREFAPPDGGUID?: string;
    LSTATUS: number;
    STRVIEW?: string;
    STRLANGCONSTTITLE?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPREF",
	timestamps: false 
})
export class LCAPPREF extends Model<LCAPPREFAttributes, LCAPPREFAttributes> implements LCAPPREFAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRNAME?: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPDGGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRREFAPPDGGUID?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LSTATUS!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRVIEW?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(256) 
    })
    	STRLANGCONSTTITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}