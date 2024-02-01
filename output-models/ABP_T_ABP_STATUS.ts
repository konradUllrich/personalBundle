import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABP_T_ABP_STATUSAttributes {
    FKSTRID?: string;
    REF_PERSONAL?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    DTINSERT?: Date;
    REF_FREIGABESTATUS?: string;
    LUSERIDINSERT?: number;
    STRID: string;
}

@Table({
	tableName: "ABP_T_ABP_STATUS",
	timestamps: false 
})
export class ABP_T_ABP_STATUS extends Model<ABP_T_ABP_STATUSAttributes, ABP_T_ABP_STATUSAttributes> implements ABP_T_ABP_STATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PERSONAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_FREIGABESTATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}