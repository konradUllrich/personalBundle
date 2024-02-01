import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABP_KAT_PLANUNGSSTATUSAttributes {
    STRID: string;
    STR_PLANUNGSSTATUS?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    STR_SORTIERUNG?: string;
    LUSERIDINSERT?: number;
    STR_ID?: string;
}

@Table({
	tableName: "ABP_KAT_PLANUNGSSTATUS",
	timestamps: false 
})
export class ABP_KAT_PLANUNGSSTATUS extends Model<ABP_KAT_PLANUNGSSTATUSAttributes, ABP_KAT_PLANUNGSSTATUSAttributes> implements ABP_KAT_PLANUNGSSTATUSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PLANUNGSSTATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

}