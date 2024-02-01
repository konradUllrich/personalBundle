import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABP_T_ABP_ZSTATUSAttributes {
    DTINSERT?: Date;
    REF_ZUSTIMMUNGSSTATUS?: string;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    TXT_KOMMENTAR?: string;
    STRID: string;
    FKSTRID?: string;
    LUSERID?: number;
}

@Table({
	tableName: "ABP_T_ABP_ZSTATUS",
	timestamps: false 
})
export class ABP_T_ABP_ZSTATUS extends Model<ABP_T_ABP_ZSTATUSAttributes, ABP_T_ABP_ZSTATUSAttributes> implements ABP_T_ABP_ZSTATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ZUSTIMMUNGSSTATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_KOMMENTAR?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}