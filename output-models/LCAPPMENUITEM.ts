import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPMENUITEMAttributes {
    STRGUID: string;
    STRAPPGUID: string;
    STRPAGEGUID: string;
    STRKEY: string;
    LPOSITION: number;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPMENUITEM",
	timestamps: false 
})
export class LCAPPMENUITEM extends Model<LCAPPMENUITEMAttributes, LCAPPMENUITEMAttributes> implements LCAPPMENUITEMAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRPAGEGUID!: string;

    @Column({
    	type: DataType.STRING(64) 
    })
    	STRKEY!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LPOSITION!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}